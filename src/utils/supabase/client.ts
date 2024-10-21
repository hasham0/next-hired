import { ActiveSessionResource } from "@clerk/types";
import { createClient } from "@supabase/supabase-js";

function createClerkSupabaseClient(
  session: ActiveSessionResource | null | undefined,
) {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        fetch: async (url, options = {}) => {
          const clerkToken = await session?.getToken({
            template: "supabase",
          });
          const headers = new Headers(options?.headers);
          headers.set("Authorization", `Bearer ${clerkToken}`);
          return fetch(url, {
            ...options,
            headers,
          });
        },
      },
    },
  );
}

export default createClerkSupabaseClient;
