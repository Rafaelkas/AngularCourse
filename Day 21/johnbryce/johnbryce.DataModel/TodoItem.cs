using System;

namespace johnbryce.DataModel
{
    public class TodoItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsCompleted { get; set; }
        public DateTime Date { get; set; }
        public TodoGroup Group { get; set; }
        public int GroupId { get; set; }
    }
}
