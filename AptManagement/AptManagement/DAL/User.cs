using Microsoft.AspNetCore.Mvc;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AptManagement.DAL
{
    public class User
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Surname { get; set; }
        public string? UserName { get; set; }
        public string? TC { get; set; }
        public Int64 Phone { get; set; }
        public string? Email { get; set; }
        public string? Car { get; set; }
  

    }
    public class Login
    {
        public string Username { get; set; } = string.Empty;
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

    }
    public class LoginDto
    {
        [FromBody]
        public string Username { get; set; } = string.Empty;
        [FromBody]
        public string Password { get; set; } = string.Empty;
    }

        public class APIAuthority
    {
        [Key]
        public int AuthId { get; set; }
        public int UserId { get; set; }
        public string? UserName { get; set; }
        public string? Password { get; set; }

        public bool IsAdmin { get; set; }
        //public bool Admin { get; set; }


    }

    /*public ICollection<Message>? MessagesSent { get; set; }*/

    /*public ICollection<Message>? MessagesReceived { get; set; }*/
}