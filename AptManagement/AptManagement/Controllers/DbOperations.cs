
using AptManagement.DAL;
using AptManagement.Entity;

namespace AptManagement.Controllers
{ 
public class DbOperations
    
{ public ManagementContext _context = new ManagementContext();
    public void CreateLogin(APIAuthority loginUser)
    {
        _context.APIAuthority.Add(loginUser);
        _context.SaveChanges();
    }

    public APIAuthority GetLogin(APIAuthority loginUser)
    {
        APIAuthority? user = null;
        System.Diagnostics.Debug.WriteLine("--------");
        System.Diagnostics.Debug.WriteLine(loginUser.UserName);
        System.Diagnostics.Debug.WriteLine(loginUser.Password);

        user = _context.APIAuthority.SingleOrDefault(m => m.UserName == loginUser.UserName && m.Password == loginUser.Password);
        System.Diagnostics.Debug.WriteLine(loginUser.UserName);
        System.Diagnostics.Debug.WriteLine(loginUser.Password);

        return user;

    }
        //login ekranından admin girdiyse,admin route'una yönlendirecek.
        public void RedirectToRoute(string routeName)
        {
        }
    }
}