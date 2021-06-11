using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace PatrickWebsiteCore.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        //classes tables
        public DbSet<Story> Stories { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Testimonial> Testimonials { get; set; }
        public DbSet<HomePage> HomePages { get; set; }

        public DbSet<Gallery> Galleries { get; set; }
        public DbSet<GalleryItem> GalleryItems { get; set; }

    }
}
