using Microsoft.EntityFrameworkCore.Migrations;

namespace PatrickWebsiteCore.Data.Migrations
{
    public partial class metaDescription : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "SiteDescription",
                table: "HomePages",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SiteDescription",
                table: "HomePages");
        }
    }
}
