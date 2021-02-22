const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const redirect = async (req, res) => {
  const { id } = req.params

  try {
    // Find shortlink in db
    const entry = await prisma.item.findUnique({
      where: {
        short: id,
      },
    })

    if (entry) {
      // If it exists, redirect
      res.redirect(entry.url)
    } else {
      // Throw if the link does not exist
      throw new Error()
    }
  } catch (error) {
    res.status(404).send('Dieser Link existiert nicht')
  }
}

module.exports = { redirect }
