using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PatrickWebsiteCore.Data
{
    public class Project
    {
        [Key]
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Brief { get; set; }

        [Required]
        public string Introduction { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public bool IsDeleted { get; set; }

        public int GalleryId { get; set; }

        public string IconURL { get; set; }

        public string PicURL { get; set; }

        [NotMapped]
        public IFormFile IconUpload { get; set; }

        [NotMapped]
        public IFormFile PicUpload { get; set; }
    }
}
