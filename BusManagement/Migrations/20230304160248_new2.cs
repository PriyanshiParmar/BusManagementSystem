using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BusManagement.Migrations
{
    /// <inheritdoc />
    public partial class new2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Routes_BusStops_begStopNo",
                table: "Routes");

            migrationBuilder.DropForeignKey(
                name: "FK_Routes_BusStops_endStopNo",
                table: "Routes");

            migrationBuilder.DropIndex(
                name: "IX_Routes_begStopNo",
                table: "Routes");

            migrationBuilder.DropIndex(
                name: "IX_Routes_endStopNo",
                table: "Routes");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Routes_begStopNo",
                table: "Routes",
                column: "begStopNo");

            migrationBuilder.CreateIndex(
                name: "IX_Routes_endStopNo",
                table: "Routes",
                column: "endStopNo");

            migrationBuilder.AddForeignKey(
                name: "FK_Routes_BusStops_begStopNo",
                table: "Routes",
                column: "begStopNo",
                principalTable: "BusStops",
                principalColumn: "stopNo",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Routes_BusStops_endStopNo",
                table: "Routes",
                column: "endStopNo",
                principalTable: "BusStops",
                principalColumn: "stopNo",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
