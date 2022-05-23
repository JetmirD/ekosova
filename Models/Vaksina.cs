using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication3.Models
{
    public class Vaksinat
    {
        public int Id { get; set; }
        public string Emri { get; set; }
        public int NumriIVaksinuarit { get; set; }
        public String Vendlindja { get; set; }
        public String LlojiVaksines { get; set; }

        public String DataVaksinimit { get; set; }
        public String Mjeku { get; set; }
        public int NrIDozave { get; set; }

    }
}