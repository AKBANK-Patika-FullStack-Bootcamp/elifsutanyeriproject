using AptManagement.DAL;
using AptManagement.Entity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace AptManagement.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles="adminn")]
    public class AdminController
    {
        List<ApartmentInfo> apartmentList = new List<ApartmentInfo>();
        List<User> userList = new List<User>();
        List<Bills> billsList = new List<Bills>();
        public ManagementContext _context = new ManagementContext();
        Notifications _notifications = new Notifications();
        


        [HttpGet] // Güncel apartman listesini görüntüler
        [Route("apartmentInfo")]
        public List<ApartmentInfo> GetApartment()
        {
            apartmentList = _context.ApartmentInfo.OrderBy(x => x.AptId).ToList();
            return apartmentList;
        }

        [HttpGet] // Güncel kullanıcı listesini görüntüler
        [Route("userInfo")]
        public List<User> GetUsers()
        {
            userList = _context.User.OrderBy(x => x.Id).ToList();
            return userList;
        }

        [HttpGet] // Güncel fatura listesini görüntüler
        [Route("billsInfo")]
        public List<Bills> GetBills()
        {
            billsList = _context.Bills.OrderBy(x => x.BillsId).ToList();
            return billsList;
        }

        [HttpGet] //Güncel borç bilgilerini görüntüler
        [Route("dueInfo")]

        public List<Bills> GetDueInfo()
        {
            var owedList = _context.Bills.Where(x => x.IsPaid == false).ToList();
            return owedList;
        }

        [HttpPost]  // Daire ekler
        [Route("addApartment")]
        public Notifications PostApartment(ApartmentInfo newApartment)
        {
                try
                {
                    _context.ApartmentInfo.Add(newApartment);
                    _context.SaveChanges();
                    _notifications.Notification = "Daire bilgisi başarıyla eklendi.";

                }
                catch (Exception ex)
                {
                    _notifications.Notification = "Hata: Daire eklenemedi";
                }

            return _notifications;
        }

        [HttpPost]  // Kullanıcı ekler
        [Route("addUser")]
        public Notifications PostUser(User newUser)
        {
            try
            {
            var userCheck = _context.User.FirstOrDefault(x => x.Name == x.Name && x.Surname == x.Surname);
            if (userCheck == null)
            {
                _context.User.Add(newUser);
                _context.SaveChanges();
                _notifications.Notification = "Kullanıcı bilgisi başarıyla eklendi.";
            }
            }

            catch (Exception ex)
            {
                _notifications.Notification = ex.Message;
            }

            return _notifications;
        }

        [HttpPost]  // User Id'sine fatura bilgisi girer
        [Route("addBills")]
        public Notifications PostBills(Bills newBill)
        {
            try
            {        
            _context.Bills.Add(newBill);
            _context.SaveChanges();
            _notifications.Notification = "Fatura ve aidat bilgisi başarıyla eklendi.";

            }
                   
           catch
            {
                _notifications.Notification = "Fatura bilgisi eklenemedi";
            }
            
            return _notifications;
        }


        [HttpPut]
        [Route("/updateUser")]
        public Notifications UpdateUser(int Id, User updatedUser)
        {
            var user = _context.User.SingleOrDefault(x => x.Id == Id);
            if (user != null)
            {
                user.Name = updatedUser.Name != default ? updatedUser.Name : user.Name;
                user.Surname = updatedUser.Surname != default ? updatedUser.Surname : user.Surname;
                user.UserName = updatedUser.UserName != default ? updatedUser.UserName : user.UserName;
                user.TC = updatedUser.TC != default ? updatedUser.TC : user.TC;
                user.Email = updatedUser.Email != default ? updatedUser.Email : user.Email;
                user.Phone = updatedUser.Phone != default ? updatedUser.Phone : user.Phone;
                user.Car = updatedUser.Car != default ? updatedUser.Car : user.Car;

                _context.SaveChanges();

                _notifications.Notification = "Kullanıcı bilgileri başarıyla güncellendi.";

            }

            else
            {
                _notifications.Notification = "Kullanıcı bulunamadı, lütfen önce kullanıcıyı ekleyiniz";
            }

            return _notifications;
        }
        [HttpPut]
        [Route("/aptUpdate")]

        public Notifications UpdateApt(string Block, int AptNumber, ApartmentInfo? updatedApt)
        {
            var apt = _context.ApartmentInfo.SingleOrDefault(x => x.Block == Block && x.AptNumber == AptNumber);
            if (apt != null)
            {
                apt.Block = Block != default ? updatedApt.Block : apt.Block;
                apt.AptNumber = AptNumber != default ? updatedApt.AptNumber : apt.AptNumber;
                apt.RoomInfo = updatedApt.RoomInfo != default ? updatedApt.RoomInfo : apt.RoomInfo;
                apt.Floor = updatedApt.Floor != default ? updatedApt.Floor : apt.Floor;
                apt.Owner = updatedApt.Owner != default ? updatedApt.Owner : apt.Owner;
                apt.Occupied = updatedApt.Occupied != default ? updatedApt.Occupied : apt.Occupied;
                apt.UsrId = updatedApt.UsrId != default ? updatedApt.UsrId : apt.UsrId;

                _context.SaveChanges();

                _notifications.Notification = "Daire bilgileri başarıyla güncellendi.";
            }
            else
            {
                _notifications.Notification = "Daire bilgisi bulunamadı, lütfen önce daireyi ekleyiniz.";
            }

            return _notifications;
        }
        
        [HttpPut]
        [Route("billsUpdate")]

        public Notifications UpdateBills(int Id, Bills updatedBill)
        {
            var bill = _context.Bills.SingleOrDefault(y => y.UserId == Id);
            if (bill != null)
            {
                bill.Water = updatedBill.Water != default ? updatedBill.Water : bill.Water;
                bill.Month = updatedBill.Month != default ? updatedBill.Month : bill.Month;
                bill.IsPaid = updatedBill.IsPaid != default ? updatedBill.IsPaid : bill.IsPaid;
                bill.Due = updatedBill.Due != default ? updatedBill.Due : bill.Due;
                bill.Electricity = updatedBill.Electricity != default ? updatedBill.Electricity : bill.Electricity;
                bill.Gas = updatedBill.Gas != default ? updatedBill.Gas : bill.Gas;

                _context.SaveChanges();

                _notifications.Notification = "Fatura bilgisi başarıyla güncellendi";

            }
            else
            {
                _notifications.Notification = "Kullanıcıya ait bir fatura bulunamadı";
            }
            return _notifications;
        }

        [HttpDelete]
        [Route("deleteUser")]
        
        public Notifications DeleteUser(int Id)
        {
            var user = _context.User.SingleOrDefault(x => x.Id == Id);
            if (user != null)
            {
                _context.User.Remove(user);
                _context.SaveChanges();

                _notifications.Notification = "Kullanıcı silindi.";
            }
            else
            {
                _notifications.Notification = "Bu id'ye ait bir kullanıcı bulunamadı"; 
            }
            return _notifications;
        }

        [HttpDelete]
        [Route("deleteBill")]

        public Notifications DeleteBill(int Id)
        {
            var bill = _context.Bills.SingleOrDefault(y => y.UserId == Id);
            if (bill != null)
            {
                _context.Bills.Remove(bill);
                _context.SaveChanges();

                _notifications.Notification = "Fatura silindi";
            }
            else
            {
                _notifications.Notification = "Bu kullanıcı id'sine ait bir fatura bulunamadı";
            }
            return _notifications;
        }
    }
}

