import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const rnlearnTodos = sqliteTable("rnlearn_todos", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  content: text("content").notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
});

export const insertRnlearnTodoSchema = createInsertSchema(rnlearnTodos);
export const selectRnlearnTodoSchema = createSelectSchema(rnlearnTodos);

export type RnlearnTodo = typeof rnlearnTodos.$inferSelect;
export type NewRnlearnTodo = typeof rnlearnTodos.$inferInsert;
