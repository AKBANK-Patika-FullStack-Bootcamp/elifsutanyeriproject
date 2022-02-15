using System;
using System.ComponentModel.DataAnnotations;

public class ApartmentInfo
{
	[Key]
	public int AptId { get; set; }
    public string? Block { get; set; }
	public int Floor { get; set; }
	public int AptNumber { get; set; }
	public int RoomInfo { get; set; }
	public bool? Owner { get; set; }
	public bool? Occupied { get; set; }
	public int? UsrId { get; set; }
	
}

public class Bills
{
	[Key]
	public int BillsId { get; set; }
	public int? Electricity { get; set; }
	public int? Water { get; set; }
	public int? Gas { get; set; }
	public int? Due { get; set; }
	public DateTime Month { get; set; }
	public bool? IsPaid { get; set; }
	public int UserId { get; set; }
}