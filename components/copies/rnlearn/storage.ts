import { eq } from "drizzle-orm";
import { db } from "@/db";
import { rnlearnTodos, insertRnlearnTodoSchema, type RnlearnTodo } from "@/db/schema";

export function loadTodos(): RnlearnTodo[] {
  return db.select().from(rnlearnTodos).all();
}

export function createTodo(content: string) {
  const newTodo = insertRnlearnTodoSchema.parse({
    content: content.trim(),
    completed: false,
    createdAt: new Date(),
  });

  db.insert(rnlearnTodos).values(newTodo).run();
}

export function removeTodo(id: number) {
  db.delete(rnlearnTodos).where(eq(rnlearnTodos.id, id)).run();
}

export function toggleTodo(id: number, completed: boolean) {
  db.update(rnlearnTodos).set({ completed: !completed }).where(eq(rnlearnTodos.id, id)).run();
}
