module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // não aceita campos vazios
        notEmpty: {
          msg: "Esse campo não pode ser vazio",
        },
        // tamanho do objeto
        len: {
          args: [4, 20],
          msg: "Esse campo deve ter entre 4 e 20 caracteres",
        },
      },
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio",
        },
        max: {
          msg: "Esse campo não pode passar de 500 caracteres",
        },
      },
    },

    author_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio",
        },
      },
    },
    author_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Esse campo precisa ser um e-mail",
        },
      },
    },
    author_ip: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIP: {
          msg: "Esse campo precisa ser um endereço IP",
        },
      },
    },
  });

  return Post;
};
