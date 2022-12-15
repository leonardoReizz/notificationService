import { Notification } from 'src/application/entities/Notification';
import { NotificationsRepository } from 'src/application/repositories/NotificationsRepository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}
