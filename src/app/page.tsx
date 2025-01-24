import { createClient } from "../../lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: countries } = await supabase.from("countries").select();

  console.log(countries);
  return <div>Home</div>;
}
