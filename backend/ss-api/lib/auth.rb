require 'jwt'

class Auth

  ALGORITHM = 'HS256'

  def self.issue(payload)
    JWT.encode(payload, auth_secret.to_s, ALGORITHM)
  end

  def self.decode(token)
    JWT.decode(token, auth_secret.to_s, true, { algorithm: ALGORITHM }).first
  end

  def self.auth_secret
    ENV["AUTH_SECRET"]
  end


end
