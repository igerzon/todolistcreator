import { prisma } from "@/db"
import { redirect } from "next/dist/server/api-utils"
import Link from "next/link"

function creaeteTodo(data: FormData){
    "use server"

    const title = data.get("title")?.valueOf()
    if (typeof title !== "string" || title.length === 0){
        throw new Error ("invalid title")
    }
    await prisma.todo.create({data: {title, complete: false}})
    redirect("/")
}


export default function page() {
  return (
    <div>
    <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">new</h1>
    </header>
    <form   action={creaeteTodo}
    className="flex gap-2 flex-col">
        <input type="text" name="title" className="border border-slate-300 bg-transperent rounded px-2 py-1 outline-none"/>
    </form>
    <div className="flex gap-1 justify-end">
        <Link href=".." className="border border-slatt-300 text-slate-300">Cancel</Link>
        <button type="submit" className="border border-slatt-300 text-slate-300">Create</button>

    </div>

    </div>
    
  )
}

