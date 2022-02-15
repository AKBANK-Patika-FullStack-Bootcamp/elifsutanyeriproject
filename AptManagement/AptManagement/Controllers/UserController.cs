using AptManagement.DAL;
using AptManagement.Entity;
using EntityFrameworkCoreJwtTokenAuth.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Security.Claims;

namespace ManagementSystem.Controllers
{

    [ApiController]
    [Route("api/[controller]s")]
    public class UserController : ControllerBase
    {
        List<User> userList = new List<User>();
        List<Bills> bills = new List<Bills>();
        List<APIAuthority> aPIAuthorities = new List<APIAuthority>();
        public ManagementContext _context = new ManagementContext();
        

        [Authorize]
        [HttpGet]
        public List<APIAuthority> GetUserInfo()
        {
            var loggedUserName = User.FindFirstValue(ClaimTypes.NameIdentifier);
            
            if (loggedUserName != null)
            {
                aPIAuthorities = _context.APIAuthority.Where(UserId => loggedUserName.Contains(UserId.UserName).Equals(loggedUserName)).ToList();   
                
            }
            return aPIAuthorities;
            /*var contractsId = waitingData.Select(data => data.ContractId).ToList();
            var pricingCriterias = table4.Where(criteria => contractsId.Contains(criteria.ContractId)
                                         .ToLookup(criteria => criteria.ContractId);*/



/*            where u.UserName = User.Identity.Name
            if (username = true)
            {
                
            }*/
            
        }
        }
    }

