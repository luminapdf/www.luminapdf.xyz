export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      api_keys: {
        Row: {
          active: boolean
          created_at: string
          deleted_at: string | null
          id: string
          key: string
          name: string
          user_id: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          deleted_at?: string | null
          id?: string
          key: string
          name: string
          user_id: string
        }
        Update: {
          active?: boolean
          created_at?: string
          deleted_at?: string | null
          id?: string
          key?: string
          name?: string
          user_id?: string
        }
        Relationships: []
      }
      api_usage: {
        Row: {
          api_name: string
          customer_id: string | null
          id: string
          last_used: string | null
          usage_count: number | null
        }
        Insert: {
          api_name: string
          customer_id?: string | null
          id?: string
          last_used?: string | null
          usage_count?: number | null
        }
        Update: {
          api_name?: string
          customer_id?: string | null
          id?: string
          last_used?: string | null
          usage_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "api_usage_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      batch_requests: {
        Row: {
          completed_at: string | null
          created_at: string | null
          customer_id: string | null
          id: string
          request_type: string
          status: string | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          request_type: string
          status?: string | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          request_type?: string
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "batch_requests_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      billing: {
        Row: {
          billing_period_end: string
          billing_period_start: string
          created_at: string | null
          customer_id: string | null
          id: string
          paid_at: string | null
          status: string | null
          total_amount: number | null
          total_usage: number | null
        }
        Insert: {
          billing_period_end: string
          billing_period_start: string
          created_at?: string | null
          customer_id?: string | null
          id?: string
          paid_at?: string | null
          status?: string | null
          total_amount?: number | null
          total_usage?: number | null
        }
        Update: {
          billing_period_end?: string
          billing_period_start?: string
          created_at?: string | null
          customer_id?: string | null
          id?: string
          paid_at?: string | null
          status?: string | null
          total_amount?: number | null
          total_usage?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "billing_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      billing_details: {
        Row: {
          amount: number | null
          api_name: string
          billing_id: string | null
          id: string
          usage_count: number | null
        }
        Insert: {
          amount?: number | null
          api_name: string
          billing_id?: string | null
          id?: string
          usage_count?: number | null
        }
        Update: {
          amount?: number | null
          api_name?: string
          billing_id?: string | null
          id?: string
          usage_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "billing_details_billing_id_fkey"
            columns: ["billing_id"]
            isOneToOne: false
            referencedRelation: "billing"
            referencedColumns: ["id"]
          },
        ]
      }
      cloud_storage: {
        Row: {
          created_at: string | null
          customer_id: string | null
          file_name: string
          file_url: string
          id: string
        }
        Insert: {
          created_at?: string | null
          customer_id?: string | null
          file_name: string
          file_url: string
          id?: string
        }
        Update: {
          created_at?: string | null
          customer_id?: string | null
          file_name?: string
          file_url?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cloud_storage_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      customers: {
        Row: {
          created_at: string | null
          email: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      pdf_requests: {
        Row: {
          completed_at: string | null
          created_at: string | null
          customer_id: string | null
          html_content: string | null
          id: string
          status: string | null
          template_id: string | null
          url: string | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          customer_id?: string | null
          html_content?: string | null
          id?: string
          status?: string | null
          template_id?: string | null
          url?: string | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          customer_id?: string | null
          html_content?: string | null
          id?: string
          status?: string | null
          template_id?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pdf_requests_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pdf_requests_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "pdf_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      pdf_templates: {
        Row: {
          content: string
          created_at: string | null
          customer_id: string | null
          id: string
          is_ai_generated: boolean | null
          is_public: boolean | null
          name: string
        }
        Insert: {
          content: string
          created_at?: string | null
          customer_id?: string | null
          id?: string
          is_ai_generated?: boolean | null
          is_public?: boolean | null
          name: string
        }
        Update: {
          content?: string
          created_at?: string | null
          customer_id?: string | null
          id?: string
          is_ai_generated?: boolean | null
          is_public?: boolean | null
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "pdf_templates_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      screenshot_requests: {
        Row: {
          completed_at: string | null
          created_at: string | null
          customer_id: string | null
          id: string
          status: string | null
          url: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          status?: string | null
          url: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          status?: string | null
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "screenshot_requests_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      calculate_billing: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
