
using AptManagement.Controllers;
using AptManagement.DAL;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;


namespace JwtWebApiTutorial.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        public static Login login = new Login();
        private readonly IConfiguration _configuration;
        /*private readonly MD5CryptoServiceProvider md5 = new();*/
        DbOperations _dbOperations = new DbOperations();


        public AuthenticationController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        [Route("register")]
        public bool loginCreate(APIAuthority _user)
        {
            _user.Password = GenerateSaltedHash(_user.Password, "salt");
            _dbOperations.CreateLogin(_user);
            return true;
        }

        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<string>> Login([FromBody] LoginDto request)
        {
            APIAuthority tokenUser = new APIAuthority();

            //System.Diagnostics.Debug.WriteLine("1111");
            System.Diagnostics.Debug.WriteLine(request.Username);
            System.Diagnostics.Debug.WriteLine(request.Password);
            tokenUser.UserName = request.Username;
            //tokenUser.Password = GenerateSaltedHash(request.Password, "salt");
            tokenUser.Password = request.Password;

            APIAuthority result = _dbOperations.GetLogin(tokenUser);

            if (result != null)
            {
                string token = CreateToken(result);
                return Ok(new { token = token, isAdmin = result.IsAdmin, UserName = result.UserName, userId= result.UserId });
            }
            else
            {
                return BadRequest("Kullanıcı yok ya da şifre hatalı.");
            }

        }

        private string CreateToken(APIAuthority user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName),
            };
            if (user.IsAdmin) {
                claims.Add(new Claim(ClaimTypes.Role, "adminn"));
            }

         

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                _configuration.GetSection("AppSettings:Token").Value));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }

        string GenerateSaltedHash(string plainTextStr, string saltStr)
        {
            byte[] plainText = Encoding.ASCII.GetBytes(plainTextStr);
            byte[] salt = Encoding.ASCII.GetBytes(saltStr);
            HashAlgorithm algorithm = new SHA256Managed();

            byte[] plainTextWithSaltBytes =
              new byte[plainText.Length + salt.Length];

            for (int i = 0; i < plainText.Length; i++)
            {
                plainTextWithSaltBytes[i] = plainText[i];
            }
            for (int i = 0; i < salt.Length; i++)
            {
                plainTextWithSaltBytes[plainText.Length + i] = salt[i];
            }

            return Encoding.ASCII.GetString(algorithm.ComputeHash(plainTextWithSaltBytes));
        }

    }
}