import { z } from 'zod';

export function formatZodError(error: z.ZodError): Record<string, string> {
  const formattedErrors: Record<string, string> = {};
  
  error.issues.forEach((err) => {
    const field = err.path[0] as string;
    if (field) {
      formattedErrors[field] = err.message;
    }
  });
  
  return formattedErrors;
}

export async function zodValidate<T>(
  schema: z.ZodSchema<T>,
  formData: FormData
): Promise<{ success: true; data: T } | { success: false; errors: Record<string, string> }> {
  const rawData = Object.fromEntries(formData.entries());

  console.log('rawData', rawData);
  
  
  try {
    const data = schema.parse(rawData);
    return { success: true, data };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: formatZodError(error)};
    }
    throw error;
  }
}