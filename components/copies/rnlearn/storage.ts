import { eq } from "drizzle-orm";
import { db } from "@/db";
import { rnlearnTodos, insertRnlearnTodoSchema, type RnlearnTodo } from "@/db/schema";

export function loadTodos(): RnlearnTodo[] {
  return db.select().from(rnlearnTodos).all();
}

export function createTodo(content: string) {
  const newTodo = insertRnlearnTodoSchema.parse({
    content: content.trim(),
    createdAt: new Date(),
  });

  db.insert(rnlearnTodos).values(newTodo).run();
}

export function removeTodo(id: number) {
  db.delete(rnlearnTodos).where(eq(rnlearnTodos.id, id)).run();
}
