import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account';
import { CommissionSchema } from '../models/Commission';
import { FollowerSchema } from '../models/Follower';
import { PiecesSchema } from '../models/Pieces';
import { ProfileSchema } from "../models/Profile";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Commissions = mongoose.model('Commission', CommissionSchema,);
  Followers = mongoose.model('Follower', FollowerSchema);
  Pieces = mongoose.model('Piece', PiecesSchema);

  Profile = mongoose.model('Profile', ProfileSchema);
}

export const dbContext = new DbContext()
