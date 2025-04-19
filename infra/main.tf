provider "google" {
  credentials = file("C:\\Users\\Dell\\Downloads\\service-account.json")
  # Replace with your actual file path
  project     = "water-footprint-53ad3"
  region      = "us-central1"
}

# Enable Firebase & Hosting-related APIs
resource "google_project_service" "firebase" {
  service = "firebase.googleapis.com"
}

resource "google_project_service" "firestore" {
  service = "firestore.googleapis.com"
}

resource "google_project_service" "hosting" {
  service = "firebasehosting.googleapis.com"
}

output "setup_status" {
  value = "Terraform infrastructure ready. Now run: firebase deploy --only hosting"
}
