import { redirect } from "next/navigation";

export default function LegacyTopicRedirect() {
  redirect("/topics/policy-regulation");
}
