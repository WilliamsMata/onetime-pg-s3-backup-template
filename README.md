# One Time PostgreSQL Backup

![Frame 3](https://github.com/MatteoGauthier/onetime-pg-s3-backup-template/assets/32040951/9c324d48-fc3e-4d6f-a56e-9584a585aaba)

A simple NodeJS application to backup your PostgreSQL database to S3 via the Railway CRON scheduler. This template is a fork of <https://github.com/railwayapp-templates/postgres-s3-backups> that has been modified to only run once.

## Overview

Simple template to backup in one time your PostgreSQL database using the Railway CRON feature. The code is a basic script to dump your PostgreSQL data to a file and then upload the file to S3.

## Highlights

- Runs one time, so the cost is really low
- Use the Railway CRON feature to schedule the backup
- Configure custom S3 URL

## Usage

Fill the template environment variables and configure the CRON job in the service settings. Video to explain ⬇️

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/UGKaB8?referralCode=Matteo)
