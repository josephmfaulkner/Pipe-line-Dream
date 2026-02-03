output "website_url" {
  description = "The HTTP URL of the static website"
  value       = "http://${aws_s3_bucket_website_configuration.static_site_config.website_endpoint}"
}

output "bucket_name" {
  description = "The name of the S3 bucket created"
  value       = aws_s3_bucket.static_site.id
}

