terraform {
  required_version = ">= 1.10.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Partial backend configuration
  # We will pass the bucket name and key via 'terraform init -backend-config=...'
  backend "s3" {
    use_lockfile = true
  }
}

provider "aws" {
  region = var.aws_region
  
  default_tags {
    tags = {
      Environment   = terraform.workspace
      ManagedBy = "Terraform"
    }
  }
}