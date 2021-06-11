using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PatrickWebsiteCore.Data
{
    public class Gallery
    {
        [Key]
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string UrlText { get; set; }

        public List<GalleryItem> Items { get; set; }

        public string IconURL { get; set; }

        [NotMapped]
        public IFormFile IconUpload { get; set; }


    }
}
