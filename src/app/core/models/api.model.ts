import { Model } from "./model";

export class Response extends Model{

  public code: number;
  public status: string;
  public message: string;
  public data: any;
  public errors: any;

  constructor(data?: object) {
      super(data);
      this.code = this.code || 404;
      this.message = this.message || 'Ocurrió un error inesperado.';
      this.data = this.data || '';
      this.errors = this.errors || '';
  }

  public static cast(data: object): Response {
      return new Response(data);
  }

  public static casts(data: object[]): Response[] {
      return data.map(c => new Response(c));
  }
}