using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PatrickWebsiteCore.Data
{
    public class GalleryItem
    {
        [Key]
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string UrlText { get; set; }

        [Required]
        public string Type { get; set; }

        public DateTime Created { get; set; }

        public int GalleryId { get; set; }
        public Gallery Gallery { get; set; }

        [NotMapped]
        public IFormFile ImageUpload { get; set; }


    }
}
