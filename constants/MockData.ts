import { faCarSide } from "@fortawesome/free-solid-svg-icons/faCarSide";
import { faTruckPickup } from "@fortawesome/free-solid-svg-icons/faTruckPickup";
import { faCaravan } from "@fortawesome/free-solid-svg-icons/faCaravan";

export const validPhoneNumber = "44111111111";

export const pickupData = [
    { "id": "P1", "location": "Warehouse Alpha", "address": "123 Industrial Park Rd, Springfield" },
    { "id": "P2", "location": "North Loading Bay", "address": "48 Maple Street, Riverside" },
    { "id": "P3", "location": "South Depot", "address": "900 Logistics Ave, Hillview" },
    { "id": "P4", "location": "East Storage Facility", "address": "221 Eastline Dr, Brookfield" },
];

export const destinationData = [
    { "id": "D1", "location": "Retail Store Central", "address": "501 Commerce Blvd, Lakewood" },
    { "id": "D2", "location": "Customer Dropoff Zone A", "address": "77 Oakridge Lane, Meadowview" },
    { "id": "D3", "location": "Regional Distribution Center", "address": "200 Transit Way, Pinecrest" },
    { "id": "D4", "location": "Express Delivery Point", "address": "5 Sunrise Drive, Fairmont" },
];

export const rideTypeData = [
    {
        "id": 0, 
        "type": "JurniX", 
        "est_time": "1.09 pm",
        "away_time": "3", 
        "passengers": "4", 
        "price_new": "£3.00", 
        "price_ori": "£5.00",
        "description": "Faster speeds",
        "icon": faCarSide,
    },
    {
        "id": 1, 
        "type": "Regular", 
        "est_time": "1.12 pm",
        "away_time": "6", 
        "passengers": "4", 
        "price_new": "£2.50", 
        "price_ori": "£4.00",
        "description": "The original",
        "icon": faTruckPickup,
    }, 
    {
        "id": 2, 
        "type": "Jurni+", 
        "est_time": "1.14 pm",
        "away_time": "8", 
        "passengers": "6", 
        "price_new": "£8.00", 
        "price_ori": "£12.50",
        "description": "Larger sizes",
        "icon": faCaravan,
    }
]

export const rideSummaryData = [
    {"name": "Price", "value": "£3.00"},
    {"name": "Date", "value": "December 11, 2025"},
    {"name": "Pickup", "value": "123 Industrial Park Rd, Springfield"},
    {"name": "Destination", "value": "77 Oakridge Lane, Meadowview"},
    {"name": "Ride", "value": "JurniX"},
]