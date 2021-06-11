using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PatrickWebsiteCore.Data
{
    public class Story
    {
        [Key]
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }

        [Required]
        public string Title { get; set; }
        [Required]
        public string Slogan { get; set; }
        [Required]
        public string MainHtml { get; set; }

        public string IconURL { get; set; }

        [NotMapped]
        public IFormFile IconUpload { get; set; }

        public string PicURL { get; set; }

        [NotMapped]
        public IFormFile PicUpload { get; set; }

        public bool IsArchived { get; set; }
        public bool IsDeleted { get; set; }

        public DateTime PublishDate { get; set; }
        [Required]
        public DateTime Created { get; set; }

        public DateTime LastModified { get; set; }

        public string Tags { get; set; }

    }
}
