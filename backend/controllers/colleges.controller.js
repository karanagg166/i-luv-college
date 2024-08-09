import prisma from "../prisma/prisma-client.js";

export const createCollege = async (req, res) => {
  const { createdBy, name, description, imageUrls } = req.body;

  if (!createdBy || !name || !description) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const college = await prisma.college.findFirst({ where: { name } });

    if (college) {
      return res
        .status(400)
        .json({ error: "College with the same name already exists" });
    }
    // Create a new college
    const newCollege = await prisma.college.create({
      data: {
        name,
        description,
        createdBy,
        images: {
          create: imageUrls.map((url) => ({
            imageURL: url,
            uploadedBy: createdBy,
          })),
        },
      },
    });

    return res.status(201).json({
      college: newCollege,
    });
  } catch (error) {
    console.log("Error in createCollege controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const AllColleges = async (req, res) => {
  try {
    const AllColleges = await prisma.college.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return res.status(200).json(AllColleges);
  } catch (error) {
    console.log("Error in AllColleges controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
