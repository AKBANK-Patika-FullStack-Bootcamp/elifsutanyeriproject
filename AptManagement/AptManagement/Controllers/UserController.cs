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
        List<Bills> billsList = new List<Bills>();
        List<APIAuthority> aPIAuthorities = new List<APIAuthority>();
        public ManagementContext _context = new ManagementContext();
        Notifications _notifications = new Notifications();

        [Authorize]
        [HttpGet]
        [Route("userBillInfo")]
        public List<Bills> GetUserBill(int id)
        {
            billsList = _context.Bills.Where(x => x.UserId == id).ToList();
            return billsList;
                  
        }

        [HttpGet]
        public List<User> UserInfo([FromHeader] int id)
        {
            userList = _context.User.Where(x => x.Id == id).ToList();
            return userList;

        }
        [HttpPut]
        public Notifications UpdateUserInfo([FromHeader] int id, User updatedUser)
        {
            var user = _context.User.SingleOrDefault(y => y.Id == id);
            if(user != null)
            {
                user.Name = updatedUser.Name != default ? updatedUser.Name : user.Name;
                user.Surname = updatedUser.Surname != default ? updatedUser.Surname : user.Surname;
                user.TC = updatedUser.TC != default ? updatedUser.TC : user.TC;
                user.Email = updatedUser.Email != default ? updatedUser.Email : user.Email;
                user.Car = updatedUser.Car != default ? updatedUser.Car : user.Car;
                user.Phone = updatedUser.Phone != default ? updatedUser.Phone : user.Phone;

                _context.SaveChanges();

                _notifications.Notification = "Kullanıcı bilgisi başarıyla güncellendi";
            }
            else
            {
                _notifications.Notification = "Kullanıcı id'si yanlış olabilir";
            }

            return _notifications;
        }
        


    }

        
}

