export class PermissionDenied extends Error {
  constructor() {
    super('Permissão de acesso negada');
    this.name = 'PermissionDenied';
  }
}
