﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace johnbryce.WebApi.Models.Dtos
{
    public record TodoGroupDto(int GroupId,string GroupName,List<string> ItemNames);
}
