using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PatrickWebsiteCore.Data
{
    public class HomePage
    {
        [Key]
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string MainVideoURL { get; set; }
        [NotMapped]
        public IFormFile MainVideoUpload { get; set; }
        public string BrandsVideoURL { get; set; }
        [NotMapped]
        public IFormFile BrandsVideoUpload { get; set; }
        public string FavIconURL { get; set; }
        [NotMapped]
        public IFormFile FavIconUpload { get; set; }
        public string SiteName { get; set; }
        public string SiteSlogan { get; set; }
        public string SiteTitle { get; set; }
        public string SiteMeta { get; set; }
        public string SiteDescription { get; set; }
        public string OgTitle { get; set; }
        public string OgType { get; set; }
        public string OgImageURL { get; set; }
        [NotMapped]
        public IFormFile OgImageUpload { get; set; }
        public string OgSiteURL { get; set; }




    }
}
