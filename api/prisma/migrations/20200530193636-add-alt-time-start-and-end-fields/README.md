# Migration `20200530193636-add-alt-time-start-and-end-fields`

This migration has been generated by Vindhya Raviraj at 5/30/2020, 7:36:36 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."BugCritter" ADD COLUMN "timeEndAlt" integer   ,
ADD COLUMN "timeStartAlt" integer   ;

ALTER TABLE "public"."FishCritter" ADD COLUMN "timeEndAlt" integer   ,
ADD COLUMN "timeStartAlt" integer   ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200530171647-create-fish-and-bug-models..20200530193636-add-alt-time-start-and-end-fields
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider      = "prisma-client-js"
@@ -20,8 +20,10 @@
   timeStart       Int
   timeEnd         Int
   monthsNorthHemi String
   monthsSouthHemi String
+  timeStartAlt    Int?
+  timeEndAlt      Int?
 }
 model BugCritter {
   id              Int    @id @default(autoincrement())
@@ -32,5 +34,7 @@
   timeStart       Int
   timeEnd         Int
   monthsNorthHemi String
   monthsSouthHemi String
+  timeStartAlt    Int?
+  timeEndAlt      Int?
 }
```


