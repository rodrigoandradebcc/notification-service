import { Notification } from '../../src/application/entities/notification';
import { NotificationsRepository } from '../../src/application/repositories/notifications-repository';

export class ImMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
