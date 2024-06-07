import CreateCourseForm from "@/components/courses/CreateCourseForm"
import { db } from "@/lib/db"

const CreateCoursePage = async () => {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc"
    },
    include: {
      subCategories: true
    }
  })

  return (
    <div>
      <CreateCourseForm categories={categories.map((category) => ({
        label: category.name,
        value: category.id,
        subCategories: category.subCategories.map((subcategory) => ({
          label: subcategory.name,
          value: subcategory.id
        }))
      }))} />
    </div>
  )
}

export default CreateCoursePage