const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { Post, Hashtag, User } = require("../models");
const { isLoggedIn } = require('./middlewares');
const cache = require("../passport/cache");
const router = express.Router();

try {
  fs.readdirSync('uploads');
} catch (error) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
}
 
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'uploads/');
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.post("/update", isLoggedIn, async (req, res, next) => {
  console.log('up clicked');
  console.log('up clicked');
  console.log('up clicked');
  console.log('up clicked');
  console.log('up clicked');
  try {
    const post = await Post.findOne({ where: { id: req.body.id } });
    if (post) {
      // const result = await post.addLikes(req.user.id);
      
      post.update({
        count: post.count-1
      })
      cache.setDirty(req.user.id);
      res.send("success");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/like", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.body.id } });
    if (post) {
      // const result = await post.addLikes(req.user.id);
      
      post.update({
        count: post.count+1
      })
      cache.setDirty(req.user.id);
      res.send("success");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/dislike", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.body.id } });
    if (post) {
      // const result = await post.addLikes(req.user.id);
      
      post.update({
        count: post.count-1
      })
      cache.setDirty(req.user.id);
      res.send("success");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/plus", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.body.id } });
    if (post) {
      // const result = await post.addLikes(req.user.id);
      
      post.update({
        count: post.count+1
      })
      cache.setDirty(req.user.id);
      res.send("success");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/minus", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.body.id } });
    if (post) {
      // const result = await post.addLikes(req.user.id);
      
      post.update({
        count: post.count-1
      })
      cache.setDirty(req.user.id);
      res.send("success");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/img', isLoggedIn, upload.single('img'), (req, res) => {
  console.log(req.file);
  res.json({ url: `/img/${req.file.filename}` });
});

const upload2 = multer();
router.post('/', isLoggedIn, upload2.none(), async (req, res, next) => {
  try {
    console.log(req.user);
    const post = await Post.create({
      content: req.body.content,
      img: req.body.url,
      UserId: req.user.id,
    });
    const hashtags = req.body.content.match(/#[^\s#]*/g);
    if (hashtags) {
      const result = await Promise.all(
        hashtags.map(tag => {
          return Hashtag.findOrCreate({
            where: { title: tag.slice(1).toLowerCase() },
          })
        }),
      );
      await post.addHashtags(result.map(r => r[0]));
    }
    res.redirect('/');
  } catch (error) {
    console.error(error);
    next(error);
  }
});
const uploadText = multer();
router.delete("/:id", isLoggedIn, uploadText.none(), async (req, res, next) => {
  try {
    const result = await Post.destroy({
      where: { id: req.params.id },
    });
    if (result == 1) res.send("success");
    else res.status(404).send("no twit");
  } catch (error) {
    console.error(error);
    next(error);
  }
});
module.exports = router;
