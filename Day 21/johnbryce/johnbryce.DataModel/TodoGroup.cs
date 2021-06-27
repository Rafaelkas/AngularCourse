using System;
using System.Collections.Generic;

namespace johnbryce.DataModel
{
    public class TodoGroup
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<TodoItem> Items { get; set; }

        public TodoGroup()
        {
            this.Items = new ();
        }
    }
}
