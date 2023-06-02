using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BusManagement.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Buses",
                columns: table => new
                {
                    busNo = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    chassisNo = table.Column<int>(type: "int", nullable: false),
                    capacity = table.Column<int>(type: "int", nullable: false),
                    manufacturer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    model = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Buses", x => x.busNo);
                });

            migrationBuilder.CreateTable(
                name: "BusStops",
                columns: table => new
                {
                    stopNo = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    stopName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BusStops", x => x.stopNo);
                });

            migrationBuilder.CreateTable(
                name: "Conductors",
                columns: table => new
                {
                    EmpId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    age = table.Column<int>(type: "int", nullable: false),
                    gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    role = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    mobileNo = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Conductors", x => x.EmpId);
                });

            migrationBuilder.CreateTable(
                name: "Drivers",
                columns: table => new
                {
                    EmpId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    licenseNo = table.Column<int>(type: "int", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    age = table.Column<int>(type: "int", nullable: false),
                    gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    role = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    mobileNo = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Drivers", x => x.EmpId);
                });

            migrationBuilder.CreateTable(
                name: "Routes",
                columns: table => new
                {
                    routeNo = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    noOfStops = table.Column<int>(type: "int", nullable: false),
                    BeginningStop = table.Column<int>(type: "int", nullable: false),
                    EndStop = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Routes", x => x.routeNo);
                    table.ForeignKey(
                        name: "FK_Routes_BusStops_BeginningStop",
                        column: x => x.BeginningStop,
                        principalTable: "BusStops",
                        principalColumn: "stopNo",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_Routes_BusStops_EndStop",
                        column: x => x.EndStop,
                        principalTable: "BusStops",
                        principalColumn: "stopNo",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "Schedules",
                columns: table => new
                {
                    scheduleId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    driver_id = table.Column<int>(type: "int", nullable: false),
                    conductor_id = table.Column<int>(type: "int", nullable: false),
                    arrivalTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    departureTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    BusNo = table.Column<int>(type: "int", nullable: false),
                    RouteNo = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Schedules", x => x.scheduleId);
                    table.ForeignKey(
                        name: "FK_Schedules_Buses_BusNo",
                        column: x => x.BusNo,
                        principalTable: "Buses",
                        principalColumn: "busNo",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Schedules_Conductors_conductor_id",
                        column: x => x.conductor_id,
                        principalTable: "Conductors",
                        principalColumn: "EmpId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Schedules_Drivers_driver_id",
                        column: x => x.driver_id,
                        principalTable: "Drivers",
                        principalColumn: "EmpId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Schedules_Routes_RouteNo",
                        column: x => x.RouteNo,
                        principalTable: "Routes",
                        principalColumn: "routeNo",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Routes_BeginningStop",
                table: "Routes",
                column: "BeginningStop");

            migrationBuilder.CreateIndex(
                name: "IX_Routes_EndStop",
                table: "Routes",
                column: "EndStop");

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
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Schedules");

            migrationBuilder.DropTable(
                name: "Buses");

            migrationBuilder.DropTable(
                name: "Conductors");

            migrationBuilder.DropTable(
                name: "Drivers");

            migrationBuilder.DropTable(
                name: "Routes");

            migrationBuilder.DropTable(
                name: "BusStops");
        }
    }
}
