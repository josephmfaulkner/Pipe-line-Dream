variable "bucket_name" {
  description = "The unique name of the S3 bucket to create"
  type        = string
  default = ""
}

variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "us-west-1"
}