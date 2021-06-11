using Microsoft.EntityFrameworkCore.Migrations;

namespace PatrickWebsiteCore.Data.Migrations
{
    public partial class homepage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "HomePages",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MainVideoURL = table.Column<string>(nullable: true),
                    BrandsVideoURL = table.Column<string>(nullable: true),
                    FavIconURL = table.Column<string>(nullable: true),
                    SiteName = table.Column<string>(nullable: true),
                    SiteSlogan = table.Column<string>(nullable: true),
                    SiteTitle = table.Column<string>(nullable: true),
                    SiteMeta = table.Column<string>(nullable: true),
                    OgTitle = table.Column<string>(nullable: true),
                    OgType = table.Column<string>(nullable: true),
                    OgImageURL = table.Column<string>(nullable: true),
                    OgSiteURL = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HomePages", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "HomePages");
        }
    }
}
