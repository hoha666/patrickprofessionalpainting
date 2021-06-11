using Microsoft.EntityFrameworkCore.Migrations;

namespace PatrickWebsiteCore.Data.Migrations
{
    public partial class galery2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "IconURL",
                table: "Galleries",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IconURL",
                table: "Galleries");
        }
    }
}
