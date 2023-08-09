import { backup } from "./backup"
import { env } from "./env"

const tryBackup = async () => {
  try {
    await backup()
    process.exit(0)
  } catch (error) {
    console.error("Error while running backup: ", error)
    process.exit(1)
  }
}

if (env.BACKUP_DATABASE_URL) {
  tryBackup()
}
