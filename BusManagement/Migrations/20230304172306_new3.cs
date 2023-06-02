using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BusManagement.Migrations
{
    /// <inheritdoc />
    public partial class new3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Schedules_Buses_BusNo",
                table: "Schedules");

            migrationBuilder.DropForeignKey(
                name: "FK_Schedules_Conductors_conductor_id",
                table: "Schedules");

            migrationBuilder.DropForeignKey(
                name: "FK_Schedules_Drivers_driver_id",
                table: "Schedules");

            migrationBuilder.DropForeignKey(
                name: "FK_Schedules_Routes_RouteNo",
                table: "Schedules");

            migrationBuilder.DropIndex(
                name: "IX_Schedules_BusNo",
                table: "Schedules");

            migrationBuilder.DropIndex(
                name: "IX_Schedules_conductor_id",
                table: "Schedules");

            migrationBuilder.DropIndex(
                name: "IX_Schedules_driver_id",
                table: "Schedules");

            migrationBuilder.DropIndex(
                name: "IX_Schedules_RouteNo",
                table: "Schedules");

            migrationBuilder.RenameColumn(
                name: "driver_id",
                table: "Schedules",
                newName: "routeToBeFollowedRouteNo");

            migrationBuilder.RenameColumn(
                name: "conductor_id",
                table: "Schedules",
                newName: "busScheduledNo");

            migrationBuilder.RenameColumn(
                name: "RouteNo",
                table: "Schedules",
                newName: "DriverId");

            migrationBuilder.RenameColumn(
                name: "BusNo",
                table: "Schedules",
                newName: "ConductorId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "routeToBeFollowedRouteNo",
                table: "Schedules",
                newName: "driver_id");

            migrationBuilder.RenameColumn(
                name: "busScheduledNo",
                table: "Schedules",
                newName: "conductor_id");

            migrationBuilder.RenameColumn(
                name: "DriverId",
                table: "Schedules",
                newName: "RouteNo");

            migrationBuilder.RenameColumn(
                name: "ConductorId",
                table: "Schedules",
                newName: "BusNo");

            migrationBuilder.CreateIndex(
                name: "IX_Schedules_BusNo",
                table: "Schedules",
                column: "BusNo");

            migrationBuilder.CreateIndex(
                name: "IX_Schedules_conductor_id",
                table: "Schedules",
                column: "conductor_id");

            migrationBuilder.CreateIndex(
                name: "IX_Schedules_driver_id",
                table: "Schedules",
                column: "driver_id");

            migrationBuilder.CreateIndex(
                name: "IX_Schedules_RouteNo",
                table: "Schedules",
                column: "RouteNo");

            migrationBuilder.AddForeignKey(
                name: "FK_Schedules_Buses_BusNo",
                table: "Schedules",
                column: "BusNo",
                principalTable: "Buses",
                principalColumn: "busNo",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Schedules_Conductors_conductor_id",
                table: "Schedules",
                column: "conductor_id",
                principalTable: "Conductors",
                principalColumn: "EmpId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Schedules_Drivers_driver_id",
                table: "Schedules",
                column: "driver_id",
                principalTable: "Drivers",
                principalColumn: "EmpId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Schedules_Routes_RouteNo",
                table: "Schedules",
                column: "RouteNo",
                principalTable: "Routes",
                principalColumn: "routeNo",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
