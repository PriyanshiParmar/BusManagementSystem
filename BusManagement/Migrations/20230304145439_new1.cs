using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BusManagement.Migrations
{
    /// <inheritdoc />
    public partial class new1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Routes_BusStops_BeginningStop",
                table: "Routes");

            migrationBuilder.DropForeignKey(
                name: "FK_Routes_BusStops_EndStop",
                table: "Routes");

            migrationBuilder.RenameColumn(
                name: "EndStop",
                table: "Routes",
                newName: "endStopNo");

            migrationBuilder.RenameColumn(
                name: "BeginningStop",
                table: "Routes",
                newName: "begStopNo");

            migrationBuilder.RenameIndex(
                name: "IX_Routes_EndStop",
                table: "Routes",
                newName: "IX_Routes_endStopNo");

            migrationBuilder.RenameIndex(
                name: "IX_Routes_BeginningStop",
                table: "Routes",
                newName: "IX_Routes_begStopNo");

            migrationBuilder.AddForeignKey(
                name: "FK_Routes_BusStops_begStopNo",
                table: "Routes",
                column: "begStopNo",
                principalTable: "BusStops",
                principalColumn: "stopNo",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Routes_BusStops_endStopNo",
                table: "Routes",
                column: "endStopNo",
                principalTable: "BusStops",
                principalColumn: "stopNo",
                onDelete: ReferentialAction.NoAction);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Routes_BusStops_begStopNo",
                table: "Routes");

            migrationBuilder.DropForeignKey(
                name: "FK_Routes_BusStops_endStopNo",
                table: "Routes");

            migrationBuilder.RenameColumn(
                name: "endStopNo",
                table: "Routes",
                newName: "EndStop");

            migrationBuilder.RenameColumn(
                name: "begStopNo",
                table: "Routes",
                newName: "BeginningStop");

            migrationBuilder.RenameIndex(
                name: "IX_Routes_endStopNo",
                table: "Routes",
                newName: "IX_Routes_EndStop");

            migrationBuilder.RenameIndex(
                name: "IX_Routes_begStopNo",
                table: "Routes",
                newName: "IX_Routes_BeginningStop");

            migrationBuilder.AddForeignKey(
                name: "FK_Routes_BusStops_BeginningStop",
                table: "Routes",
                column: "BeginningStop",
                principalTable: "BusStops",
                principalColumn: "stopNo",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Routes_BusStops_EndStop",
                table: "Routes",
                column: "EndStop",
                principalTable: "BusStops",
                principalColumn: "stopNo",
                onDelete: ReferentialAction.NoAction);
        }
    }
}
