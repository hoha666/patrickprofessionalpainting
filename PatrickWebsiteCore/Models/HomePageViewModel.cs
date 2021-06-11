using PatrickWebsiteCore.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PatrickWebsiteCore.Models
{
    public class HomePageViewModel
    {
        public List<Story> stories { get; set; }

        public List<Project> projects { get; set; }

        public List<Testimonial> testimonials { get; set; }

        public string mainVideo { get; set; }
        public string brandVideo { get; set; }
        public string siteName { get; set; }
        public string siteSlogan { get; set; }
        public string siteTitle { get; set; }


    }
}
