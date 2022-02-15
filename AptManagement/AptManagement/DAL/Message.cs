using System;

namespace AptManagement.DAL
{
    public class Message
    {
        public int MessageId { get; set; }
        public int SenderId { get; set; }
        public User? Sender { get; set; }
        public int RecieverId { get; set; }
        public User? Receiver { get; set; }
        public string? Subject { get; set; }
        public string? Body { get; set; }
        public bool IsRead { get; set; }
        public DateTime? DateRead { get; set; }
        public DateTime DateSent { get; set; }
        public bool SenderDeleted { get; set; }
        public bool RecieverDeleted { get; set; }
    }

    public class MessageForCreation
    {
        public int SenderId { get; set; }
        public int RecieverId { get; set; }
        public DateTime DateSent { get; set; }
        public string? Subject { get; set; }
        public string? Body { get; set; }

        public MessageForCreation()
        {
            DateSent = DateTime.Now;
        }
    }
    public class MessageToReturn
    {
        public int MessageId { get; set; }
        public int SenderId { get; set; }
        public int RecieverId { get; set; }
        public string? Subject { get; set; }
        public string? Body { get; set; }
        public bool IsRead { get; set; }
        public DateTime? DateRead { get; set; }
        public DateTime DateSent { get; set; }
    }
}